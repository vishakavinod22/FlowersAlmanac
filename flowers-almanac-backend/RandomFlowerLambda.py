# Python code used to pick a random flower
import boto3
import random

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('flowers-almanac')

    # Scan the DynamoDB table to fetch all items
    response = table.scan()
    items = response['Items']

    # Randomly pick one item from the list
    random_item = random.choice(items)

    # Extract commonName and scientificName from the randomly chosen item
    random_common_name = random_item.get('common_name', '')
    random_scientific_name = random_item.get('scientific_name', '')

    return {
        'statusCode': 200,
        'body': {
            'commonName': random_common_name,
            'scientificName': random_scientific_name
        }
    }
