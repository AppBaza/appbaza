.PHONY: e f c d

e/%:
	@echo $*
f:
	git fetch && git pull origin main --rebase

c/%:
	git add .
	git commit -m "$(subst _, ,$(subst -, ,$*))"
	git push

d:
	USE_SSH=true yarn deploy
