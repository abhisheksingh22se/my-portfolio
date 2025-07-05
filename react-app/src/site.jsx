import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Abhishek Singh</h1>
        <p className="text-lg mt-2 text-gray-600">
          DevOps | DevSecOps | CS Master's Graduate
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">FastAPI + MongoDB</h3>
              <p className="text-gray-600 mt-2">
                Containerized FastAPI app with MongoDB, GitHub Actions CI/CD pipeline, and Docker Compose setup.
              </p>
              <Button className="mt-4" variant="outline">
                View on GitHub
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Node.js + CI/CD</h3>
              <p className="text-gray-600 mt-2">
                Node.js app with GitHub Actions and Docker deployment to AWS. Emphasizes automated testing and infrastructure as code.
              </p>
              <Button className="mt-4" variant="outline">
                View on GitHub
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Java + Gradle + Terraform</h3>
              <p className="text-gray-600 mt-2">
                Java-based microservice deployed using Terraform scripts with CI/CD integration and cloud-native best practices.
              </p>
              <Button className="mt-4" variant="outline">
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>🏆 Won university-organized hackathon by building a game</li>
          <li>📄 Published a blockchain-related research paper</li>
          <li>🎓 Graduate Assistant at Learning Center during MS</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>DevOps: Docker, Kubernetes, Jenkins, GitHub Actions, Terraform</li>
          <li>Languages: Python, Java, Node.js, Bash</li>
          <li>Cloud: AWS, GCP (basics), Linux servers</li>
          <li>Security: Snyk, Trivy, GitLeaks, OWASP ZAP</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">📧 abhishek@example.com</p>
        <p className="text-gray-700">🔗 <a href="https://github.com/abhisheksingh22se" className="text-blue-600 underline">GitHub</a> | <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 underline">LinkedIn</a></p>
      </section>
    </div>
  );
}
