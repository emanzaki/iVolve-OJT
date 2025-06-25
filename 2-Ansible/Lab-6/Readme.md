# Lab 6: Ansible Roles for Application Deployment
Create an Ansible role for installing Docker, Kubernetes CLI (kubectl), and Jenkins.

Write Ansible playbook to run the created roles.

Verify the installation on managed node.

---

structure:
```bash
lab2/
├── inventory.ini          
├── deploy_apps.yml        
└── roles/
    └── docker_k8s_jenkins/    
        ├── tasks/
        │   ├── main.yml       
        │   ├── docker.yml     
        │   ├── kubectl.yml    
        └── └── jenkins.yml    
``` 
then in cmd run:
```bash
ansible-playbook -i inventory.ini deploy_apps.yml
```
