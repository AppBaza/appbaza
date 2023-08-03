.PHONY: e commit deploy

e/%:
	@echo $*

c/%:
	git add .
	git commit -m "$(subst _, ,$(subst -,, $*))"

d:
	USE_SSH=true yarn deploy
