<h1>DOCUMENTATION</h1>
<h2>Endpoints</h2>
<p>/allTickets</p>
<p>GraphQL Query</p>
<p>Also to choose specific event you should add id parameter to your request parameters</p>
<p>Request example</p>
id=1195
<pre>
  {
	allTickets {
		Section
		Row
		SeatNumber
		Price
	}
}
</pre>
<p>Response example</p>
<pre>
  {
	"data": {
		"allTickets": [
			{
				"Section": "Balcony",
				"Row": "A",
				"SeatNumber": "115",
				"Price": "401"
			},
			{
				"Section": "Balcony",
				"Row": "A",
				"SeatNumber": "116",
				"Price": "401"
			},
			{
				"Section": "Balcony",
				"Row": "A",
				"SeatNumber": "117",
				"Price": "401"
			}
  ]
}
}
</pre>
