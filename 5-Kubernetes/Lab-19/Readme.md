# Lab 19: Node Isolation Using Taints in Kubernetes

Run Kubernetes cluster with 3 nodes (Minikube, KubeAdm, EKS,...).

Taint first node with a specific key-value pair 'workload=master' and effect NoSchedule.

Taint second node with a specific key-value pair 'workload=app' and effect NoSchedule.

Taint third node with a specific key-value pair 'workload=database' and effect NoSchedule.

Describe all nodes to verify the taint.

---

```bash
minikube start --nodes=3 --driver=docker
```

```bash
kubectl taint nodes minikube workload=master:NoSchedule
kubectl taint nodes minikube-m02 workload=app:NoSchedule
kubectl taint nodes minikube-m03 workload=database:NoSchedule
```

