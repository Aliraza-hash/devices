import paramiko
import time
import sys

def remote_exec(hostname, username='root',password='Embe1mpls',port=22):
	try:
		client = paramiko.SSHClient()
		client.load_system_host_keys()
		client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
		client.connect(hostname+'.englab.juniper.net', port=port, username=username,password=password)
		cli = client.invoke_shell()
		time.sleep(2)
		cli.send('cli\n')
		time.sleep(2)
		cmd_output = cli.recv(65535).decode('utf-8')
		cli.send('show chassis fpc\n')
		time.sleep(2)
		cmd_output = cli.recv(65535).decode('utf-8')
		return cmd_output
	except paramiko.AuthenticationException:
		return "Authentication Error!"
	except paramiko.ssh_exception.SSHException:
		return "Couldnt SSH"

print(remote_exec(sys.argv[1]))
