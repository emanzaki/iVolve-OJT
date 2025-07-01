FROM maven:3.9.10-eclipse-temurin-17-alpine AS package

WORKDIR /javaApp

COPY . .

RUN mvn package -DskipTests


FROM gcr.io/distroless/java17-debian11

WORKDIR /javaApp

COPY --from=package /javaApp/target/demo-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java" , "-jar" , "demo-0.0.1-SNAPSHOT.jar"]
