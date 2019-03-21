pipeline {
    agent none
    environment {
        GOOGLE_CREDENTIALS = credentials('NPE_GCR_CREDENTIALS')
        NPM_TOKEN = credentials('NPM_TOKEN')
        repository = 'gcr.io/gcp-ushi-platform-services-npe/automationpoc1'
    }
    stages {
        stage('Build and Test Application') {
            agent { 
                docker {
                    label 'docker'
                    image 'nexus.d.lowes.com:8800/digital/node-build-agent:1.2.0'
                    args  '-v /home/jenkins/.ssh:/home/jenkins/.ssh'
                }
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Docker Build and Push Image') {
            agent { label 'docker' }
            steps {
                script {
                    COMMIT_ID = sh(returnStdout: true, script: 'git rev-parse HEAD')
                    IMAGE_TAG = "JENKINS-${env.BUILD_ID}_${BRANCH_NAME}_${COMMIT_ID}"
 
                    sh 'echo $GOOGLE_CREDENTIALS > keyfile.json'
                    sh 'docker login -u _json_key -p "$(cat keyfile.json)" https://gcr.io'
                    sh "docker build -f Dockerfile --build-arg CONTEXT=automationpoc1 --build-arg ROOT=poc . -t ${repository}:${IMAGE_TAG}"
                    sh "docker push ${repository}:${IMAGE_TAG}"
                }
            }
        }
    }
	
    post {
        failure {
            script {
                mail (to: 'jasantha.konduru@gmail.com, 
                        subject: "Job '${env.JOB_NAME}' (${env.BUILD_NUMBER}) failed.",
                        body: "Please visit ${env.BUILD_URL} for further information."
                );
            }
        }
    }
}