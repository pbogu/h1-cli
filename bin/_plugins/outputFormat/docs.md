# Argument ```--output table / -o table```

## Examples

### View all virtual machines in table format

```bash
{{scope}} vm list -o table
```

# Argument ```--output tsv / -o tsv```

## Description

Output format which mostly works like tabular format, but without the header row. Efficiently usable in ```awk``` and shell.

## Examples

### View all disk in tsv format

```bash
{{scope}} disk list -o tsv
```

# Argument ```--output list / -o list```

## Description

An output format that displays subsequent properties line by line.

## Examples

### View all network in list format

```bash
{{scope}} network list -o list
```

# Argument ```--query```

## Description

Argument ```--query``` mean JMESPath query string. It is quite a powerful tool that allows you to efficiently 
    obtain specific information about resources.
    
See the documentation and examples published on [jmespath.org](https://jmespath.org) for details about syntax.
    
## Examples

### Calculates the total size of disks

```bash
{{scope}} disk list -o json --query 'sum([].size)'
```

### Summarize image size

```bash
{{scope}} image list --query '[].{name:name,diskCount:length(disks),fileSize:fileSize}'
```

### Attach all detached disk to VM

```bash
{{scope}} disk list --query "[?state=='Detached'].{id:_id}" -o tsv | xargs -r -n 1 {{scope}} vm disk attach --vm test-vm --disk
```

### Stop all virtual machines

```bash
{{scope}} vm list -o id | xargs -r -n 1 {{scope}} vm stop --vm
```

### Create new disk and attach to virtual machine

```
$ DISK_ID=$({{scope}} disk create --name my-ambigious-name --type ssd --size 10 -o tsv --query '[].[_id]')
$ {{scope}} vm disk attach --vm test-vm --disk $DISK_ID
```

Note (1): In most cases, you can avoid using ID by naming resources uniquely.
