---
id: openvpn-troubleshooting
title: OpenVPN Troubleshooting
sidebar_label: OpenVPN Troubleshooting
---

## No Connectivity
This is most likely due to lack of permissions. For example, running OpenVPN on Linux without `sudo`.

### Resolving on Linux:
To resolve, perform the following:

  1. Ensure there is no OpenVPN process running by launching a terminal and entering: <br/>
        `sudo killall openvpn`

  2. Then launch OpenVPN with administrative permissions,     `sudo openvpn <path to config>`

If you find yourself still unable to connect to the TryHackMe network, you will need to recreate your **[OpenVPN Configuration file](https://tryhacke.com/access)**, by pressing the **"Regenerate"** button like in the photo below.

![Regen OpenVPN File](https://i.imgur.com/jCnkADu.png)

After allowing the process to complete, you will now need to redownload this configuration file and connect via the steps outlined in the **[OpenVPN Connection Guide](https://docs.tryhackme.com/docs/openvpn/connecting/openvpn-connecting)**

Even after this you still cannot connect, please get in touch with support.


### Resolving on Windows
We have noticed reports of difficulty connecting to the TryHackMe network using OpenVPN on Windows. For example, some users haven't been able to use Zenmap/Nmap against deployed instances whilst being shown as connected.

As a good rule of thumb, the only need to connect to the TryHackMe network is to use tools against instances that are often not supported on Windows. I.e. `netcat` reverse shells. Moreover, WSL even though it is *Linux*, launching OpenVPN as if it were will not work. We encourage the use of Linux as much as possible for compatibility.

  1. Revisit the [OpenVPN Connection Guide for Windows](https://docs.tryhackme.com/docs/openvpn/connecting/openvpn-connecting#connecting-via-windows) and ensure you are running as an administrator.

If you see messages relating to TLS errors, go to **[this]**(https://openvpn.net/faq/tls-error-tls-key-negotiation-failed-to-occur-within-60-seconds-check-your-network-connectivity/) page.

## Not receiving reverse shells or Metasploit exploits not creating sessions
This is normally either incorrect exploit settings (check this first!) or people using a kali VM but running the VPN connection on their host machine.
The reverse shell will try and connect to the IP address, but that IP address points to the host rather than the VM so a connection will not be made.

## Intermittent Connection (Random Drop-outs):
This issue usually stems from multiple connections to the TryHackMe network. However, look for external factors to OpenVPN as to why you are experiencing issues first:

### Checking for External Issuses:
  1. In this setup, OpenVPN does not route all of your internet traffic through TryHackMe - are you able to connect to external websites like google?
  2. Are you using WiFi? Perhaps there could be interference or distancing issues resulting in a weak signal that would disrupt connectivity.
  3. Are you in a country that blocks OpenVPN traffic? (China, Egypt)

### Checking for OpenVPN Issues:
Most errors relating to maintaining connectivity to TryHackMe, despite a good connection otherwsie stems from having multiple sessions (or connections) with OpenVPN.

For a stable connection, **OpenVPN needs to be ran only once**. Otherwise it will start disconnecting/connection between the various sessions. To resolve this, perform the following in a new terminal:

1. Type `ps aux | grep openvpn` into your [linux] terminal and press enter.

2. If there's more than one and the **second entry doesn't have "grep" in it**, perform the following steps:

3. Type `sudo killall openvpn` into your [linux] terminal and press enter.

4. Start the VPN with `sudo openvpn <path-to-config>`

Please note these instructions were written prior to Kali 2020. For Kali 2020 onwards and other distros that do not use root user by default, you can expect another line starting with "sudo". This is not an openvpn process, it's a sudo process.
