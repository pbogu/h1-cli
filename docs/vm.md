# TOC

  * [h1 vm create](#h1-vm-create) - Create Virtual machine
  * [h1 vm list](#h1-vm-list) - List Virtual machine
  * [h1 vm show](#h1-vm-show) - Show Virtual machine
  * [h1 vm history](#h1-vm-history) - History of Virtual machine
  * [h1 vm service](#h1-vm-service) - Manage your services of Virtual machine
    * [h1 vm service list](#h1-vm-service-list) - List Service for Virtual machine
    * [h1 vm service show](#h1-vm-service-show) - Show Service for Virtual machine
    * [h1 vm service change](#h1-vm-service-change) - Change type of Service for Virtual machine
  * [h1 vm delete](#h1-vm-delete) - Delete Virtual machine
  * [h1 vm stop](#h1-vm-stop) - Stop Virtual machine
  * [h1 vm start](#h1-vm-start) - Start Virtual machine
  * [h1 vm restart](#h1-vm-restart) - Restart Virtual machine
  * [h1 vm turnoff](#h1-vm-turnoff) - Turnoff Virtual machine
  * [h1 vm rename](#h1-vm-rename) - Rename Virtual machine
  * [h1 vm userdata](#h1-vm-userdata) - Manage userdata for Virtual machine
  * [h1 vm serialport](#h1-vm-serialport) - Serial Console
    * [h1 vm serialport console](#h1-vm-serialport-console) - Connect to Virtual machine using Serial Console
    * [h1 vm serialport log](#h1-vm-serialport-log) - Log Serial Console buffer of Virtual machine
  * [h1 vm disk](#h1-vm-disk) - Manage your Disk
    * [h1 vm disk list](#h1-vm-disk-list) - List Disk
    * [h1 vm disk attach](#h1-vm-disk-attach) - Attach disk to Disk
    * [h1 vm disk detach](#h1-vm-disk-detach) - Detach disk from Disk
  * [h1 vm nic](#h1-vm-nic) - Manage your Network adapter
    * [h1 vm nic list](#h1-vm-nic-list) - List Network adapter
    * [h1 vm nic delete](#h1-vm-nic-delete) - Delete Network adapter
    * [h1 vm nic create](#h1-vm-nic-create) - Create Network adapter
    * [h1 vm nic show](#h1-vm-nic-show) - Show Network adapter
    * [h1 vm nic firewall](#h1-vm-nic-firewall) - Manage Firewall of Network adapter
      * [h1 vm nic firewall add](#h1-vm-nic-firewall-add) - Add firewall to Network adapter
      * [h1 vm nic firewall remove](#h1-vm-nic-firewall-remove) - Remove firewall from Network adapter
    * [h1 vm nic history](#h1-vm-nic-history) - History of Network adapter
    * [h1 vm nic ip](#h1-vm-nic-ip) - Manage your IP address of Network adapter
      * [h1 vm nic ip list](#h1-vm-nic-ip-list) - List IP address of Network adapter
      * [h1 vm nic ip delete](#h1-vm-nic-ip-delete) - Delete IP address of Network adapter
      * [h1 vm nic ip add](#h1-vm-nic-ip-add) - Add IP address to IP address of Network adapter
      * [h1 vm nic ip replace](#h1-vm-nic-ip-replace) - Replace IP address of Network adapter
      * [h1 vm nic ip persistent](#h1-vm-nic-ip-persistent) - Persistent IP address of Network adapter
      * [h1 vm nic ip show](#h1-vm-nic-ip-show) - Show IP address of Network adapter
    * [h1 vm nic tag](#h1-vm-nic-tag) - Manage your tag
      * [h1 vm nic tag list](#h1-vm-nic-tag-list) - List tag
      * [h1 vm nic tag add](#h1-vm-nic-tag-add) - Add a tag to Network adapter
      * [h1 vm nic tag delete](#h1-vm-nic-tag-delete) - Delete a tag of Network adapter
  * [h1 vm dvd](#h1-vm-dvd) - Manage your DVD
    * [h1 vm dvd list](#h1-vm-dvd-list) - List DVD
    * [h1 vm dvd insert](#h1-vm-dvd-insert) - Insert ISO into DVD drive of DVD
    * [h1 vm dvd eject](#h1-vm-dvd-eject) - Eject ISO from DVD drive of DVD
  * [h1 vm console](#h1-vm-console) - Open Virtual machine console in web-browser
  * [h1 vm ssh](#h1-vm-ssh) - Connect to Virtual machine using SSH
  * [h1 vm passwordreset](#h1-vm-passwordreset) - Password reset for Virtual machine
  * [h1 vm metrics](#h1-vm-metrics) - Get live metrics of Virtual machine
  * [h1 vm tag](#h1-vm-tag) - Manage your tag
    * [h1 vm tag list](#h1-vm-tag-list) - List tag
    * [h1 vm tag add](#h1-vm-tag-add) - Add a tag to Virtual machine
    * [h1 vm tag delete](#h1-vm-tag-delete) - Delete a tag of Virtual machine


# Specification

## h1 vm

Manage your Virtual machine

## h1 vm create

Create Virtual machine

### Syntax

```h1 vm create | --name NAME --type TYPE [--tag TAG [--tag TAG ...]] [--password PASSWORD] [--username USERNAME] [--ssh SSH [--ssh SSH ...]] [--image IMAGE] [--no-image] [--iso ISO] [--os-disk-name OS-DISK-NAME] [--os-disk-type OS-DISK-TYPE] [--os-disk-size OS-DISK-SIZE] [--os-disk OS-DISK] [--network NETWORK] [--ip IP] [--no-start] [--userdata-file USERDATA-FILE] [--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]]```
### Examples

#### Create Debian Virtual Machine with recommended disk

```bash
h1 vm create --name test-vm --type a1.nano
```

Note (1): By default, all user SSH keys are used. To manage user SSH keys use ```h1 user credentials list```.

Note (1): By default, image ```debian``` is used.

#### Create Ubuntu Virtual Machine with custom disk size

```bash
h1 vm create --name test-vm --os-disk ssd,10 --type a1.nano --image debian --ssh my-ssh
```

Note (1): To identify available disk type use ```h1 service list --resource disk```.

Note (2): To identify available instance type use ```h1 service list --resource vm --type flavour```.

Note (3): To list available SSH keys use ```h1 project credentials list``` or ```h1 user credentials list```.

Note (4): To list available cloud-provided images use ```h1 image list --recommend```.
          For them you can also ```<distro>[:<release>]``` as ID.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Virtual machine name |
| ```--type TYPE``` |  | Virtual machine type name or ID |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--password PASSWORD``` |  | Initial administrator user password |
| ```--username USERNAME``` |  | Initial administrator username |
| ```--ssh SSH [--ssh SSH ...]``` |  | SSH key ID or name that allows access. If not provided, use all user SSH keys.. The parameter may occur repeatedly |
| ```--image IMAGE``` |  | Image ID or name. If not given and not used "no-image" parameter, "debian" will be used. |
| ```--no-image``` |  | Do not use image. Parameter excludes the use of "image" parameter and disable default image. |
| ```--iso ISO``` |  | ISO ID or name |
| ```--os-disk-name OS-DISK-NAME``` |  | OS disk name. Parameter excludes the use of "os-disk" parameter. |
| ```--os-disk-type OS-DISK-TYPE``` |  | OS disk type. Parameter excludes the use of "os-disk" parameter. |
| ```--os-disk-size OS-DISK-SIZE``` |  | OS disk size. Parameter excludes the use of "os-disk" parameter. |
| ```--os-disk OS-DISK``` |  | OS disk: [[name,] type, size | id] |
| ```--network NETWORK``` |  | Network ID or name to attach |
| ```--ip IP``` |  | IP address for Virtual machine |
| ```--no-start``` |  | Do not start Virtual machine after creation |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |
| ```--ssh-file SSH-FILE [--ssh-file SSH-FILE ...]``` |  | Read SSH key from file. The parameter may occur repeatedly |

## h1 vm list

List Virtual machine

### Syntax

```h1 vm list | ```
### Example

```bash
h1 vm list
```

## h1 vm show

Show Virtual machine

### Syntax

```h1 vm show | --vm VM```
### Example

```bash
h1 vm show --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm history

History of Virtual machine

### Syntax

```h1 vm history | --vm VM```
### Example

```bash
h1 vm history --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm service

Manage your services of Virtual machine

## h1 vm service list

List Service for Virtual machine

### Syntax

```h1 vm service list | --vm VM```
### Example

```bash
h1 vm service list --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm service show

Show Service for Virtual machine

### Syntax

```h1 vm service show | --vm VM --service SERVICE```
### Example

```bash
h1 vm service show --service my-service --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--service SERVICE``` |  | Service for Virtual machine ID or name |

## h1 vm service change

Change type of Service for Virtual machine

### Syntax

```h1 vm service change | --vm VM --new-type NEW-TYPE```
### Example

```bash
h1 vm service change --vm my-vm --new-type m2.medium
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--new-type NEW-TYPE``` |  | New type |

## h1 vm delete

Delete Virtual machine

### Syntax

```h1 vm delete | --vm VM```
### Example

```bash
h1 vm delete --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm stop

Stop Virtual machine

### Syntax

```h1 vm stop | --vm VM```
### Example

```bash
h1 vm stop --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm start

Start Virtual machine

### Syntax

```h1 vm start | --vm VM```
### Example

```bash
h1 vm start --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm restart

Restart Virtual machine

### Syntax

```h1 vm restart | --vm VM```
### Example

```bash
h1 vm restart --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm turnoff

Turnoff Virtual machine

### Syntax

```h1 vm turnoff | --vm VM```
### Example

```bash
h1 vm turnoff --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm rename

Rename Virtual machine

### Syntax

```h1 vm rename | --vm VM --new-name NEW-NAME```
### Example

```bash
h1 vm rename --vm my-vm --new-name my-renamed-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 vm userdata

Manage userdata for Virtual machine

### Syntax

```h1 vm userdata | --vm VM --userdata-file USERDATA-FILE```
### Examples

#### Set userdata for virtual machine

```bash
$ echo "any-data" > data.txt
$ h1 vm userdata --vm test-vm --userdata-file ./data.txt
```

#### Read userdata for virtual machine
 
```bash
h1 vm show --vm test-vm --query '[].{data:userMetadata}' --output tsv | openssl base64 -d
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--userdata-file USERDATA-FILE``` |  | Read userdata from file |

## h1 vm serialport

Serial Console

## h1 vm serialport console

Connect to Virtual machine using Serial Console

### Syntax

```h1 vm serialport console | --vm VM [--port PORT]```
### Example

```bash
h1 vm serialport console --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--port PORT``` |  | Port to connect |

## h1 vm serialport log

Log Serial Console buffer of Virtual machine

### Syntax

```h1 vm serialport log | --vm VM [--port PORT] [--follow]```
### Example

```bash
h1 vm serialport log --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--port PORT``` |  | Port to connect |
| ```--follow``` |  | Output current messages in real time as they arrive |

## h1 vm disk

Manage your Disk

## h1 vm disk list

List Disk

### Syntax

```h1 vm disk list | --vm VM```
### Example

```bash
h1 vm disk list
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm disk attach

Attach disk to Disk

### Syntax

```h1 vm disk attach | --vm VM --disk DISK```
### Example

```bash
h1 vm disk attach --vm test-vm --disk my-disk-0
```

Note (1): It is possible to connect up to 24 disks to one virtual machine.

Note (2): Use ```h1 disk list``` to list available disk or
          ```h1 disk create --name my-disk-0 --type ssd --size 10``` to create a new one.

Note (3): Each disk can be connected to one virtual machine at a time.

Note (4): Instead of adding a new disk, we suggest considering resize of available disk.
          This process can also be done on-line up to 1TB for each disk.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm disk detach

Detach disk from Disk

### Syntax

```h1 vm disk detach | --vm VM --disk DISK```
### Example

```bash
h1 vm disk detach --vm test-vm --disk my-disk-0
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |
| ```--disk DISK``` |  | Disk name or ID |

## h1 vm nic

Manage your Network adapter

### Examples

#### Get IP address of virtual machine

```bash
h1 vm nicl list --vm test-vm --output json --query "[].{ip:join(',', ip[].address)}" --output tsv
```

## h1 vm nic list

List Network adapter

### Syntax

```h1 vm nic list | --vm VM```
### Example

```bash
h1 vm nic list --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm nic delete

Delete Network adapter

### Syntax

```h1 vm nic delete | --vm VM --nic NIC```
### Example

```bash
h1 vm nic delete --nic my-nic --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic create

Create Network adapter

### Syntax

```h1 vm nic create | --vm VM --type TYPE [--tag TAG [--tag TAG ...]] [--network NETWORK] [--ip IP]```
### Examples

#### Create network adapter with public IP

```bash
h1 vm nic create --vm test-vm2 --type public
```

#### Create network adapter and private network

```bash
h1 vm nic create --vm test-vm2 --network my-network --type private
```

Note (4): To list available networks use ```h1 network list```.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--type TYPE``` |  | Type of Network Adapter |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--network NETWORK``` |  | ID or name of Network to connect |
| ```--ip IP``` |  | IP address to assign |

## h1 vm nic show

Show Network adapter

### Syntax

```h1 vm nic show | --vm VM --nic NIC```
### Example

```bash
h1 vm nic show --nic my-nic
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic firewall

Manage Firewall of Network adapter

## h1 vm nic firewall add

Add firewall to Network adapter

### Syntax

```h1 vm nic firewall add | --firewall FIREWALL --vm VM --nic NIC```
### Example

```
h1 vm nic firewall add --nic my-nic
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--firewall FIREWALL``` |  | Firewall ID or name |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic firewall remove

Remove firewall from Network adapter

### Syntax

```h1 vm nic firewall remove | --vm VM --nic NIC```
### Example

```
h1 vm nic firewall remove --nic my-nic
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic history

History of Network adapter

### Syntax

```h1 vm nic history | --nic NIC --vm VM```
### Example

```bash
h1 vm nic history --nic my-nic --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--nic NIC``` |  | Network adapter ID or name |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm nic ip

Manage your IP address of Network adapter

## h1 vm nic ip list

List IP address of Network adapter

### Syntax

```h1 vm nic ip list | --vm VM --nic NIC```
### Example

```bash
h1 vm nic ip list --vm my-vm --nic nic-of-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |

## h1 vm nic ip delete

Delete IP address of Network adapter

### Syntax

```h1 vm nic ip delete | --vm VM --nic NIC --ip IP```
### Example

```bash
h1 vm nic ip delete --ip my-ip --vm my-vm --nic nic-of-vm --ip 123.0.0.50
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | IP address of Network adapter ID or name |

## h1 vm nic ip add

Add IP address to IP address of Network adapter

### Syntax

```h1 vm nic ip add | --vm VM --nic NIC --ip IP```
### Examples

#### Add IP address to network adapter

```bash
h1 vm nic ip add --vm test-vm2 --nic 5b1f28ffdadb705edd76b411 --ip 5784e97be2627505227b584c
```

Note: Use ```h1 vm nic list --vm test-vm2``` to identify network adapter.

Note: Use ```h1 ip list``` to list available IP address or ```h1 ip create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | Public IP address or ID of IP |

## h1 vm nic ip replace

Replace IP address of Network adapter

### Syntax

```h1 vm nic ip replace | --vm VM --nic NIC --ip IP --new-ip NEW-IP```
### Examples

#### Add IP address to network adapter

```bash
h1 vm nic ip replace --vm test-vm2 --nic 5b1f28ffdadb705edd76b411 --ip 5784e97be2627505227b584c
```

Note: Use ```h1 vm nic list --vm test-vm2``` to identify network adapter.

Note: Use ```h1 ip list``` to list available IP address or ```h1 ip create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | IP address or ID of attached IP |
| ```--new-ip NEW-IP``` |  | New public IP address or ID of IP |

## h1 vm nic ip persistent

Persistent IP address of Network adapter

### Syntax

```h1 vm nic ip persistent | --vm VM --nic NIC --ip IP```
### Example

```
h1 vm nic ip persistent --vm test-vm --nic 5b994d0cab228cb79e8576c9 --ip 5784e97be2627505227b584c
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | IP address or ID of public IP |

## h1 vm nic ip show

Show IP address of Network adapter

### Syntax

```h1 vm nic ip show | --vm VM --nic NIC --ip IP```
### Example

```bash
h1 vm nic ip show --ip my-ip
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID |
| ```--ip IP``` |  | IP address of Network adapter ID or name |

## h1 vm nic tag

Manage your tag

## h1 vm nic tag list

List tag

### Syntax

```h1 vm nic tag list | --vm VM --nic NIC```
### Example

```bash
h1 vm nic tag list --nic my-nic
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic tag add

Add a tag to Network adapter

### Syntax

```h1 vm nic tag add | --tag TAG [--tag TAG ...] --vm VM --nic NIC```
### Example

```bash
h1 vm nic tag add --nic test-nic --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm nic tag delete

Delete a tag of Network adapter

### Syntax

```h1 vm nic tag delete | --tag TAG --vm VM --nic NIC```
### Example

```bash
h1 vm nic tag delete --nic test-nic --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--nic NIC``` |  | Network adapter ID or name |

## h1 vm dvd

Manage your DVD

## h1 vm dvd list

List DVD

### Syntax

```h1 vm dvd list | --vm VM```
### Example

```bash
h1 vm dvd list --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm dvd insert

Insert ISO into DVD drive of DVD

### Syntax

```h1 vm dvd insert | --vm VM --iso ISO```
### Example

```bash
h1 vm dvd insert --vm test-vm --iso ubuntu-live
```

Note: Use ```h1 iso list``` to list available ISO or ```h1 iso create``` to create a new one.

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |
| ```--iso ISO``` |  | ISO name or ID |

## h1 vm dvd eject

Eject ISO from DVD drive of DVD

### Syntax

```h1 vm dvd eject | --vm VM```
### Example

```bash
h1 vm dvd eject --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine name or ID |

## h1 vm console

Open Virtual machine console in web-browser

### Syntax

```h1 vm console | --vm VM```
### Example

```bash
h1 vm console --vm test-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm ssh

Connect to Virtual machine using SSH

### Syntax

```h1 vm ssh | --vm VM [--username USERNAME] [--port PORT] [--private] [--command COMMAND]```
### Examples

#### Connect to virtual machine via SSH

```bash
h1 vm ssh --vm test-vm
```

#### Execute command on virtual machine via SSH

```bash
h1 vm ssh --vm test-vm --command 'id'
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--username USERNAME``` |  | Username for ssh connection |
| ```--port PORT``` |  | Port for ssh connection |
| ```--private``` |  | Use first private network, skip public |
| ```--command COMMAND``` |  | Command to execute |

## h1 vm passwordreset

Password reset for Virtual machine

### Syntax

```h1 vm passwordreset | --user USER --vm VM```
### Example

```bash
h1 vm passwordreset --vm test-vm --user root
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--user USER``` |  | Username |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm metrics

Get live metrics of Virtual machine

### Syntax

```h1 vm metrics | --vm VM```
### Example

```bash
h1 vm metrics --vm test-vm2
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm tag

Manage your tag

## h1 vm tag list

List tag

### Syntax

```h1 vm tag list | --vm VM```
### Example

```bash
h1 vm tag list --vm my-vm
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm tag add

Add a tag to Virtual machine

### Syntax

```h1 vm tag add | --tag TAG [--tag TAG ...] --vm VM```
### Example

```bash
h1 vm tag add --vm test-vm --tag prod=true
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG [--tag TAG ...]``` |  | Key=value of tag. The parameter may occur repeatedly |
| ```--vm VM``` |  | Virtual machine ID or name |

## h1 vm tag delete

Delete a tag of Virtual machine

### Syntax

```h1 vm tag delete | --tag TAG --vm VM```
### Example

```bash
h1 vm tag delete --vm test-vm --tag prod
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--tag TAG``` |  | Tag |
| ```--vm VM``` |  | Virtual machine ID or name |

