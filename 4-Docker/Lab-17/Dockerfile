FROM maven:3.9.10-eclipse-temurin-17-alpine

WORKDIR /app

COPY . .

RUN mvn package -DskipTests

EXPOSE 8080

ENTRYPOINT ["java","-jar","target/demo-0.0.1-SNAPSHOT.jar"]
