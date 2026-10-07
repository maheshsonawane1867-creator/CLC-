// ================================
// CLOUD COMPUTING DASHBOARD
// ================================

// Chart setup
const ctx = document.getElementById("usageChart").getContext("2d");

const usageChart = new Chart(ctx, {
    type: "line",

    data: {
        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets: [
            {
                label: "CPU Usage",
                data: [35, 42, 38, 55, 48, 60, 42],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37, 99, 235, 0.1)",
                borderWidth: 3,
                fill: true,
                tension: 0.4
            },

            {
                label: "RAM Usage",
                data: [45, 50, 48, 60, 55, 65, 58],
                borderColor: "#22c55e",
                backgroundColor: "rgba(34, 197, 94, 0.05)",
                borderWidth: 3,
                fill: true,
                tension: 0.4
            }
        ]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                position: "bottom"
            }
        },

        scales: {
            y: {
                beginAtZero: true,
                max: 100,

                ticks: {
                    callback: function(value) {
                        return value + "%";
                    }
                }
            }
        }
    }
});


// ================================
// REFRESH SERVER DATA
// ================================

const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", function() {

    refreshBtn.innerHTML = "⟳ Updating...";

    setTimeout(function() {

        refreshBtn.innerHTML = "✓ Updated";

        setTimeout(function() {
            refreshBtn.innerHTML = "↻ Refresh";
        }, 1500);

    }, 1000);
});


// ================================
// FILE UPLOAD
// ================================

const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

uploadBtn.addEventListener("click", function() {
    fileInput.click();
});

fileInput.addEventListener("change", function() {

    const file = fileInput.files[0];

    if (!file) {
        return;
    }

    const fileSize = formatFileSize(file.size);

    const fileElement = document.createElement("div");

    fileElement.classList.add("file");

    fileElement.innerHTML = `
        <div class="file-icon doc">
            FILE
        </div>

        <div class="file-details">
            <strong>${file.name}</strong>
            <span>${fileSize} • Just now</span>
        </div>

        <button class="download-btn">
            Uploaded
        </button>
    `;

    fileList.prepend(fileElement);

    alert("File uploaded successfully!");
});


// Convert bytes into readable format
function formatFileSize(bytes) {

    if (bytes === 0) {
        return "0 Bytes";
    }

    const units = [
        "Bytes",
        "KB",
        "MB",
        "GB"
    ];

    const index = Math.floor(
        Math.log(bytes) / Math.log(1024)
    );

    return (
        parseFloat(
            (bytes / Math.pow(1024, index)).toFixed(2)
        ) +
        " " +
        units[index]
    );
}


// ================================
// VIEW SERVER BUTTONS
// ================================

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const serverName =
            this.parentElement.parentElement
                .children[0].textContent;

        alert(
            "Server Details\n\n" +
            serverName +
            "\n\nStatus: Online\nCPU: Normal\nRAM: Normal"
        );

    });

});


// ================================
// DOWNLOAD BUTTONS
// ================================

const downloadButtons =
    document.querySelectorAll(".download-btn");

downloadButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (this.textContent.trim() === "Uploaded") {
            return;
        }

        alert(
            "Download started successfully!"
        );

    });

});


// ================================
// UPGRADE PLAN
// ================================

const upgradeBtn =
    document.getElementById("upgradeBtn");

upgradeBtn.addEventListener("click", function() {

    alert(
        "Upgrade Plan\n\n" +
        "Choose a cloud storage plan:\n\n" +
        "200 GB - ₹199/month\n" +
        "500 GB - ₹399/month\n" +
        "1 TB - ₹699/month"
    );

});


// ================================
// CHART PERIOD
// ================================

const chartPeriod =
    document.getElementById("chartPeriod");

chartPeriod.addEventListener("change", function() {

    const period = this.value;

    if (period === "7") {

        usageChart.data.labels = [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ];

        usageChart.data.datasets[0].data =
            [35, 42, 38, 55, 48, 60, 42];

        usageChart.data.datasets[1].data =
            [45, 50, 48, 60, 55, 65, 58];

    }

    else if (period === "14") {

        usageChart.data.labels = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14"
        ];

        usageChart.data.datasets[0].data =
            [30, 40, 35, 45, 50, 48, 55,
             60, 52, 58, 62, 55, 48, 42];

        usageChart.data.datasets[1].data =
            [40, 45, 48, 50, 55, 52, 60,
             65, 58, 62, 68, 60, 55, 58];

    }

    else {

        usageChart.data.labels = [
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4"
        ];

        usageChart.data.datasets[0].data =
            [42, 55, 48, 60];

        usageChart.data.datasets[1].data =
            [50, 60, 55, 65];
    }

    usageChart.update();
});


// ================================
// NAVIGATION
// ================================

const navLinks =
    document.querySelectorAll(".sidebar nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});
