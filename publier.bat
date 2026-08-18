@echo off
echo Synchronisation des notes Obsidian...
robocopy "C:\Users\selen\OneDrive\Documents\Obsidian Vault" "C:\Users\selen\quartz\content" /MIR /XD .obsidian private templates /NFL /NDL /NJH /NJS

cd /d C:\Users\selen\quartz

echo.
echo Envoi vers GitHub...
git add -A
git commit -m "Mise a jour du contenu"
git push

echo.
echo Termine ! Le site va se reconstruire automatiquement dans 1-2 minutes.
pause
