pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                echo 'Code quality check'
            }
        }

        stage('Security') {
            steps {
                sh 'npm install -g snyk'
                sh 'snyk test || true'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 my-app'
            }
        }

        stage('Release') {
            steps {
                echo 'Release stage'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring stage'
            }
        }
    }
}