# Python code to generate and upload flowers csv to S3 bucket
import json
import boto3
import csv
import io
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')

def get_flowers():
    table = dynamodb.Table('flowers-almanac')
    response = table.scan()
    return response['Items']

# Function to generate the CSV file
def generate_csv(flowerData):
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(['common_name', 'scientific_name'])
    for flower in flowerData:
        writer.writerow([flower['common_name'], flower['scientific_name']])
    return output.getvalue()

# Function to upload the csv file to S3
def upload_to_s3(file_content, file_name, content_type):
    bucket_name = 'flowers-list'
    s3.put_object(Bucket=bucket_name, Key=file_name, Body=file_content, ContentType=content_type)
    s3_object_url = f"https://{bucket_name}.s3.amazonaws.com/{file_name}"
    return s3_object_url

def lambda_handler(event, context):
    flowers = get_flowers()
    csv_content = generate_csv(flowers)
    
    # Get current date and time
    now = datetime.now()
    timestamp = now.strftime('%Y%m%d%H%M%S')
    # Appending the file name with the current time stamp
    file_name = f'flowers_{timestamp}.csv'
    
    s3_object_url = upload_to_s3(csv_content, file_name, 'text/csv')
    
    return {
        'statusCode': 200,
        'body': {'message': 'CSV file generated and uploaded successfully', 'file_name': file_name, 'download_name':'flowers.csv', 'url':s3_object_url}
    }
