import requests
import html
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def obtener_preguntas(request):
    try:
        amount = request.query_params.get('amount', 10)
        respuesta = requests.get(
            f'https://opentdb.com/api.php?amount={amount}&type=multiple',
            timeout=5
        ).json()

        preguntas = []
        for item in respuesta['results']:
            
            preguntas.append({
                'pregunta': html.unescape(item['question']),
                'categoria': html.unescape(item['category']),
                'dificultad': item['difficulty'],
                'respuesta_correcta': html.unescape(item['correct_answer']),
                'respuestas_incorrectas': [html.unescape(r) for r in item['incorrect_answers']],
            })

        return Response(preguntas, status=200)
    except Exception as e:
        return Response({'error': str(e)}, status=500)