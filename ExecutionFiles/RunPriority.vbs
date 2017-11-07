Set oShell = CreateObject ("Wscript.Shell") 
Dim strArgs
strArgs = "cmd /c clean.bat"
oShell.Run strArgs,1, False
WScript.Sleep(60000)
strArgs = "cmd /c P1.bat"
oShell.Run strArgs,1, False
WScript.Sleep(60000)
strArgs = "cmd /c P2.bat"
oShell.Run strArgs,1, False
