<h1>DOCUMENTATION</h1>
<h2>Endpoints</h2>
<p>/allTickets</p>
<p>GraphQL Query</p>
<p>Request example</p>
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
