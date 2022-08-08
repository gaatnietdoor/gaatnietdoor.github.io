---
title: Migrate agents to Workload Security
date: 2022-08-08 19:31:44 +0200
categories: [General, Trend Micro Cloud Visione One]
tags: [Trend Micro]     # TAG names should always be lowercase
---

# Migrate agents to Workload Security

This is one part of the process for migrating from Deep Security to Workload Security. For a complete picture of the migration process, see Migrate from Deep Security to Workload Security.

## Prerequisites

* Deep Security Manager 20.0.321 (20 LTS 2021-01-26) or later
* Check that you're using Deep Security Agent 20.0.0-2419 or later

> **_NOTE:_** Virtual Appliance: Computers protected by Virtual Appliance (agent-less or combined-mode) will refuse to migrate.

## Migrate agents using the migration tool

1. In upper-right corner of the Deep Security Manager console, select Support > Migrate to Workload Security

![Migration Menu](/assets/migration-menu.png)

2. On the Migrate to Workload Security page that appears, **select the Agents tab**.
3. Select **Migrate using Computers page**. The Deep Security Computers page is displayed.
4. Select one or more computers that you want to migrate.
5. Select **Actions** > **Migrate to Workload Security**.
6. In the dialog box that appears, specify the settings that you want applied to the agents when moved, and then select **Migrate**:

> **_NOTE:_** The proxy is optional. Leave both checkboxes selected 

![Migration Menu](/assets/migration-set-config.png)

* **Security Policy**: If you have migrated your Deep Security policies to Workload Security and want to keep the same policy applied to the migrated agent, select Assign migrated policy. If you want to assign a different policy, choose Select a policy from Workload Security and select the new policy.
* **Computer Group**: The computer group where the agents will be put in Workload Security.
* **Relay Group**: All agents will be assigned to the Primary Relay Group in Workload Security.
* **Proxy to contact Workload Security Manager**: Select a proxy if agents need one to contact Workload Security.
* **Proxy to contact Relay(s)**: Select a proxy if agents need one to contact relays on Workload Security.
* **Migrate with existing hostname, display name, and description**: Select this to use the existing hostname, display name, and description for the migrated agent.
* **Migrate with settings override at computer level**: Select this to migrate any settings that have an override at the computer level. This does not include rule assignments.

7. Check the *move* status.
8. If you run into problems, check Troubleshooting

![Move Agent Status](/assets/diagram_move_agent_status.png)


{: .note .warning} 


 dfdfdfd 