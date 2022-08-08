---
title: Set up a data center gateway
date: 2022-08-05 08:00:00 +0200
categories: [General, Trend Micro]
tags: [test]     # TAG names should always be lowercase
---

# Set up a data center gateway

A data center gateway enables communication between Workload Security and your vCenter server, allowing Workload Security to retrieve your virtual machine inventory from the vCenter server. Gateways that are installed in your data center contact the vCenter servers on behalf of Workload Security, as seen in the diagram below.
<br/><br/>

![My image Name](/assets/gateway.png)

Data center gateways and Workload Security authenticate each other and communicate via encrypted channels (TLS/443).

Each data center gateway maintains a list of addresses for its accessible vCenter servers. While Workload Security intends to synchronize virtual machine data with a vCenter server, a connected data center gateway bridges the request from Workload Security to the designated vCenter server.

For layered protection, deploy a firewall around a data center gateway to limit its destination.

<br/><br/>
## Configure a data center gateway

1. Data center gateways are supported on the following platforms:
     * Red Hat Enterprise Linux 7
     * Red Hat Enterprise Linux 8
     * Ubuntu 18.04
     * Ubuntu 20.04



