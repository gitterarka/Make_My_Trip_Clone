export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => (
      <div className="cell">
        {params.row.username}
      </div>
    )    
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
];
export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 170,
  },
  {
    field: "type",
    headerName: "Type",
    width: 80,
  },

  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];
export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 130,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "maxPeople",
    headerName: "People",
    width: 90,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },{
    field: "roomNumbers",
    headerName: "Room Number",
    width: 100,
  },
];
export const flightColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "flightNumber",
      headerName: "Flight Number",
      width: 150,
    },
    {
      field: "airline",
      headerName: "Airline",
      width: 180,
    },
    {
      field: "from",
      headerName: "From",
      width: 150,
    },
    {
      field: "to",
      headerName: "To",
      width: 150,
    },
    {
      field: "departureTime",
      headerName: "Departure Time",
      width: 180,
      type: "dateTime",
    },
    {
      field: "arrivalTime",
      headerName: "Arrival Time",
      width: 180,
      type: "dateTime",
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "seatsAvailable",
      headerName: "Seats Available",
      width: 160,
    },
    {
      field: "seatType",
      headerName: "Seat Type",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
];
