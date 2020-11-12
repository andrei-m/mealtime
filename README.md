# Mealtime
Recipe viewer for one or more recipes cooked together for a meal

The general idea is to present a set of recipes together, and coordinate prep steps with cooking so that food is ready at about the same time.

**Work in Progress**

## Ideas

* Identify the 'critical path' - longest time duration recipe, then work backwards from its completion time. Arrange cooking and prep steps for shorter recipes relative to the end of the longest cooking duration.
* Probably local storage is enough state to get started, i.e. don't lose timer state if the page refreshes
* Recipe selector - up to 3 recipes arranged in columns
