# Python code used to add a flower to the database
import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('flowers-almanac')

def lambda_handler(event, context):
    data = json.loads(event['body'])
    item = {
        'id': str(uuid.uuid4()),
        'common_name': data['common_name'],
        'scientific_name': data['scientific_name']
    }
    
    try:
        table.put_item(Item=item)
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Data inserted successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Failed to insert data', 'error': str(e)})
        }
