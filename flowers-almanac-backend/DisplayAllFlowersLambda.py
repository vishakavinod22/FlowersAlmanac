# Python code used to display all the flowers
import json
import boto3
from boto3.dynamodb.conditions import Key, Attr

# Initialize the DynamoDB resource
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('flowers-almanac')

def lambda_handler(event, context):
    try:
        response = table.scan()
        flowers = response.get('Items', [])
        
        return {
            'statusCode': 200,
            'body': json.dumps(flowers)
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Failed to fetch data', 'error': str(e)})
        }
