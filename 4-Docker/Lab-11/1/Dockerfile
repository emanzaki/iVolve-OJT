FROM maven:3.9.10-eclipse-temurin-17-alpine

WORKDIR /javaApp

COPY . .

RUN mvn package

EXPOSE 8080

ENTRYPOINT ["java" , "-jar" , "target/demo-0.0.1-SNAPSHOT.jar"]