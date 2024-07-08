function toggleSidebar() {
	document.querySelector(".sidebar").classList.toggle("translate-x-0");
}

function toggleDropdown() {
	document.getElementById("avatarDropdown").classList.toggle("hidden");
}

function confirmCheckIn() {
	alert("Absen Masuk berhasil!");
}

function confirmCheckOut() {
	alert("Absen Pulang berhasil!");
}

function currentDate() {
	return new Date().toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

function dropdown() {
	return {
		open: false,
		selectedMonth: "Aug",
		months: [
			{ name: "Jan", year: 2023 },
			{ name: "Feb", year: 2023 },
			{ name: "Mar", year: 2023 },
			{ name: "Apr", year: 2023 },
			{ name: "May", year: 2023 },
			{ name: "Jun", year: 2023 },
			{ name: "Jul", year: 2023 },
			{ name: "Aug", year: 2023 },
			{ name: "Sep", year: 2023 },
			{ name: "Oct", year: 2023 },
			{ name: "Nov", year: 2023 },
			{ name: "Dec", year: 2023 },
		],
		selectMonth(month) {
			this.selectedMonth = month;
			this.open = false;
			// Tambahkan logika untuk memperbarui data tabel berdasarkan bulan yang dipilih
			
		},
	};
}

document.addEventListener("DOMContentLoaded", (event) => {
	// Ambil elemen dengan ID "currentDate"
	const dateElement = document.getElementById("currentDate");
	// Set konten elemen dengan tanggal hari ini
	dateElement.textContent = currentDate();
});
