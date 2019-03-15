run:
	bundle exec rake serve

install:
	gem install bundler
	bundle install

t:
	bundle exec rake test

t_html:
	bundle exec rake html_lint

t_css:
	bundle exec rake scss_lint
