.PHONY: e c d

e/%:
	@echo $*

c/%:
	git add .
	MSG="$(subst _, ,$(subst -, ,$*))"
	git commit -m $MSG
	git push

d:
	USE_SSH=true yarn deploy
