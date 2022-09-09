---
title: Regenerating the Default Key Ring
date: 2022-09-09 19:05:59 +0200
categories: [General, Cisco, UCS]
tags: [Datacenter]     # TAG names should always be lowercase
---

## Regenerating the Default Key Ring

The default key ring certificate must be manually regenerated if the cluster name changes or the certificate expires.

<br>

![3ba35caa-9187-4b27-aac6-426c4635d823.png](https://files.nuclino.com/files/2afe6a2b-1214-454e-9c1c-229172a4609a/3ba35caa-9187-4b27-aac6-426c4635d823.png)

### Procedure

|            | **Command or Action**                            | **Purpose**                                             |
| ---------- | ------------------------------------------------ | ------------------------------------------------------- |
| **Step 1** | UCS-A# **scope security**                        | Enters security mode.                                   |
| **Step 2** | UCS-A /security # **scope keyring default**      | Enters key ring security mode for the default key ring. |
| **Step 3** | UCS-A /security/keyring # **set regenerate yes** | Regenerates the default key ring.                       |
| **Step 4** | UCS-A /security/keyring # **commit-buffer**      | Commits the transaction.                                |

### Example

The following example regenerates the default key ring:

```
UCS-A# scope security
UCS-A /security # scope keyring default
UCS-A /security/keyring* # set regenerate yes
UCS-A /security/keyring* # commit-buffer
UCS-A /security/keyring # 
```

[Cisco UCS Manager Administration Management Using the CLI,...](https://www.cisco.com/c/en/us/td/docs/unified_computing/ucs/ucs-manager/CLI-User-Guides/Admin-Management/4-0/b_Cisco_UCS_Manager_CLI_Administration_Mgmt_Guide_4-0/b_Cisco_UCS_Manager_CLI_Administration_Mgmt_Guide_4-0_chapter_0110.html "Cisco UCS Manager Administration Management Using the CLI, Release 4.0 - UCS Manager Communication Services [Cisco UCS Manager]")

