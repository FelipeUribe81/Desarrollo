compiler = tsc

f1 = function
f2 = typesFunctions

progs = $(f1) $(f2)

all:
		for file in $(progs); do \
		$(compiler) $$file.ts; \
		done
clean:
		for file in $(progs); do \
		rm $$file.js; \
		done
$(f1):
		$(compiler) $@.ts --w
$(f2):
		$(compiler) $@.ts --w