pipeline {
    agent any //{ docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'cd videogames && npm install && cd ../'
                sh 'docker build ./videogames -t istic/api_videogames'
            }
        }
         stage('test') {
            steps {
                sh 'docker run --detach --name test_api_videogames -p 20083:8083 istic/api_videogames:latest'
                sh 'newman run videogames_tests/videogames_test.postman_collection.json'
                sh 'docker rm -f test_api_videogames'
            }
        }
        stage('deploy') {
            steps {
                catchError {
                    sh 'docker rm -f api_videogames'
                } 
                sh 'docker run --detach --name api_videogames -p 8083:8083 istic/api_videogames:latest'

            }
        }
    }
}