Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs

strArgs = "cmd /c Windows2.bat"
oShell.Run strArgs,1, False
WScript.Sleep(60000)
strArgs = "cmd /c Windows1.bat"
oShell.Run strArgs,1, False
WScript.Sleep(60000)
strArgs = "cmd /c Windows3.bat"
oShell.Run strArgs,1, False