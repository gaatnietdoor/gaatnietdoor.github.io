---
title: Set up a data center gateway
date: 2022-09-07 11:43:50 +0200
categories: [Cisco, ACI]
tags: [Networking]     # TAG names should always be lowercase
---

# Cisco ACI configuring Azure Express Route









# Optimize ExpressRoute Routing


## Suboptimal routing from Microsoft to customer

![ACI Suboptimal MS to Customer AS PATH](/assets/expressroute-case2-problem.png)



## Suboptimal routing between virtual networks

![ACI Suboptimal between virtual networks](/assets/expressroute-case3-problem.png)




![ACI Suboptimal change weight](/assets/expressroute-case3-solution.png)

## Set rules

Tenant > Policies > Protocol > Set Rules

Create New Rule

Rule for AS Prepend

1. Name the rule. In my case this will be the rule for the As Prepend. Do't select any of the boxes.

![ACI AS-Prepend](/assets/create-set-rules-for-a-route-map.png)

2. Open the newly created rule
3. Click on the + sign at Set As Path
![ACI AS-Prepend](/assets/set-as-path.png)
4. Configure the Prepend AS ASN
![ACI AS-Prepend](/assets/configure-asn.png)




