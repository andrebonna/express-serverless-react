@NonCPS
def serverlessDeploy(directories) {
    for (directory in directories) {
        sh "cd ${directory} && serverless deploy -v"
    }
}

node('docker-slave') {

    if (params.awsKey == null || params.awsSecret == null) {
        throw new Exception("Missing AWS credentials")
    }

    checkout scm

    echo 'Building..'
    stage ('Install') {
        if (params.clean != null && params.clean) {
            sh "rm -Rf node_modules"
        }
        sh "NODE_ENV=development yarn install"
    }

    stage ('Test') {
        sh "yarn test"
        junit 'test-report.xml'
        publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: false,
            reportDir: 'coverage',
            reportFiles: 'index.html',
            reportName: 'HTML Report',
            reportTitles: ''
        ])
    }

    stage ('Deploy') {
        sh "serverless config credentials --provider aws --key ${params.awsKey} --secret ${params.awsSecret}"

        def directories = sh script: "dirname \$(find . -name serverless.yml)", returnStdout: true
        directories = directories.split('\n');

        serverlessDeploy(directories)
    }
}
