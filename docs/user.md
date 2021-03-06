# TOC

  * [h1 user create](#h1-user-create) - Create an account
  * [h1 user invitation](#h1-user-invitation) - Manage your invitation of User
    * [h1 user invitation list](#h1-user-invitation-list) - List invitation of User
    * [h1 user invitation decline](#h1-user-invitation-decline) - Decline invitation of User
    * [h1 user invitation accept](#h1-user-invitation-accept) - Accept invitation of User
  * [h1 user credentials](#h1-user-credentials) - Manage your credentials
    * [h1 user credentials show](#h1-user-credentials-show) - Show credentials
    * [h1 user credentials list](#h1-user-credentials-list) - List credentials
    * [h1 user credentials delete](#h1-user-credentials-delete) - Delete credentials
    * [h1 user credentials rename](#h1-user-credentials-rename) - Rename credentials
    * [h1 user credentials add](#h1-user-credentials-add) - Add public SSH key for User
  * [h1 user 2fa](#h1-user-2fa) - Manage two factor authentication
    * [h1 user 2fa enable](#h1-user-2fa-enable) - Enable factor of authentication
    * [h1 user 2fa disable](#h1-user-2fa-disable) - Disable factor of authentication
    * [h1 user 2fa list](#h1-user-2fa-list) - List authentication factory


# Specification

## h1 user

Manage your User

## h1 user create

Create an account

### Syntax

```h1 user create | ```
### Example

```bash
h1 user create
```

## h1 user invitation

Manage your invitation of User

## h1 user invitation list

List invitation of User

### Syntax

```h1 user invitation list | ```
### Example

```bash
h1 user invitation list
```

## h1 user invitation decline

Decline invitation of User

### Syntax

```h1 user invitation decline | --invitation INVITATION```
### Examples

#### Decline invitation

```bash
h1 user invitation decline --invitation 5d88097cd6249ff5478540b2
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--invitation INVITATION``` |  | Invitation ID |

## h1 user invitation accept

Accept invitation of User

### Syntax

```h1 user invitation accept | --invitation INVITATION```
### Examples

#### Accept invitation

```bash
h1 user invitation accept --invitation 5d88097cd6249ff5478540b2
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--invitation INVITATION``` |  | Invitation ID |

## h1 user credentials

Manage your credentials

## h1 user credentials show

Show credentials

### Syntax

```h1 user credentials show | --credentials CREDENTIALS```
### Example

```bash
h1 user credentials show --credentials my-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials list

List credentials

### Syntax

```h1 user credentials list | ```
### Example

```bash
h1 user credentials list
```

## h1 user credentials delete

Delete credentials

### Syntax

```h1 user credentials delete | --credentials CREDENTIALS```
### Example

```bash
h1 user credentials delete --credentials my-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |

## h1 user credentials rename

Rename credentials

### Syntax

```h1 user credentials rename | --credentials CREDENTIALS --new-name NEW-NAME```
### Example

```bash
h1 user credentials rename --credentials my-credentials --new-name my-renamed-credentials
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--credentials CREDENTIALS``` |  | Credentials ID or name |
| ```--new-name NEW-NAME``` |  | New name |

## h1 user credentials add

Add public SSH key for User

### Syntax

```h1 user credentials add | --name NAME --sshkey-file SSHKEY-FILE```
### Example

```bash
h1 user credentials add --name my-home-ssh --sshkey-file ~/.ssh/id_rsa.pub
```

### Required arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--name NAME``` |  | Name |
| ```--sshkey-file SSHKEY-FILE``` |  | Public SSH key filename |

## h1 user 2fa

Manage two factor authentication

## h1 user 2fa enable

Enable factor of authentication

### Syntax

```h1 user 2fa enable | [--type {totp,otac}]```
### Examples

#### Enable Time-Based One-Time Password (TOTP) factor

```bash
h1 user 2fa enable
```

After scanning image in [Google Authenticator] or [Authy] applications, you will receive a
token that will allow you to login to the site.

[Google Authenticator]: https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2
[Authy]: https://authy.com/download/

#### Enable One-time authorization Codes (OTAC) factor

```bash
h1 user 2fa enable --type otac
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--type {totp,otac}``` |  | type |

## h1 user 2fa disable

Disable factor of authentication

### Syntax

```h1 user 2fa disable | [--type {totp,otac}]```
### Examples

#### Disable OTAC codes

```bash
h1 user 2fa disable --type otac
```

### Optional arguments

| Name | Default | Description |
| ---- | ------- | ----------- |
| ```--type {totp,otac}``` |  | type |

## h1 user 2fa list

List authentication factory

### Syntax

```h1 user 2fa list | ```
### Example

```bash
h1 user 2fa list
```

