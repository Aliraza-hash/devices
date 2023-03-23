import paramiko
import time
import sys

def remote_exec(device,hostname='bng-baas-shell', username='araza',password='Juniper@2023',port=22):
	try:
		client = paramiko.SSHClient()
		client.load_system_host_keys()
		client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
		client.connect(hostname, port=port, username=username,password=password)
		cli = client.invoke_shell()
		time.sleep(2)
		cli.send('Juniper@2023\n')
		time.sleep(2)
		cli.send('eval `ssh-agent.sh`\n')
		time.sleep(2)
		cli.send('Juniper@2023\n')
		time.sleep(2)
		cmd_output = cli.recv(65535).decode('utf-8')
		cli.send('res sh '+device+'\n')
		time.sleep(2)

		cmd_output = cli.recv(65535).decode('utf-8')
		time.sleep(2)
		return cmd_output
	except paramiko.AuthenticationException:
		return "Authentication Error!"
	except paramiko.ssh_exception.SSHException:
		return "Couldnt SSH" + device

print(remote_exec(sys.argv[1]))
