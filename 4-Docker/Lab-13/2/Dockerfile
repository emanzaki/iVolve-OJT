FROM python:3.11-alpine

ENV APP_MODE=production \
    APP_REGION=canada-west
    
WORKDIR /app

COPY . .

RUN pip install flask

EXPOSE 8080

ENTRYPOINT ["python" , "app.py"]