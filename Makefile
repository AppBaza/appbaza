.PHONY: e c d

e/%:
	@echo $*

c/%:
	git add .
	git commit -m "$(subst _, ,$(subst -,, $*))"
	git push

d:
	USE_SSH=true yarn deploy
