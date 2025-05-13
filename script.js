// DOMがロードされた後に実行
document.addEventListener('DOMContentLoaded', function() {
    // セグメント別売上高の円グラフ
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(salesCtx, {
        type: 'pie',
        data: {
            labels: ['トータルパックプロデュース', 'メディカルサプライ', 'ライフケア', '調剤薬局'],
            datasets: [{
                data: [1331.7, 4749.2, 366.7, 334.7],
                backgroundColor: [
                    '#0068b7', // プライマリカラー
                    '#4c8dda', // プライマリライト
                    '#00a0e9', // アクセント
                    '#004d86'  // プライマリダーク
                ],
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value}億円 (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // セグメント別営業利益の円グラフ
    const profitCtx = document.getElementById('profitChart').getContext('2d');
    const profitChart = new Chart(profitCtx, {
        type: 'pie',
        data: {
            labels: ['トータルパックプロデュース', 'メディカルサプライ', 'ライフケア', '調剤薬局'],
            datasets: [{
                data: [120.2, 69.7, 21.9, 34.3],
                backgroundColor: [
                    '#0068b7', // プライマリカラー
                    '#4c8dda', // プライマリライト
                    '#00a0e9', // アクセント
                    '#004d86'  // プライマリダーク
                ],
                borderColor: 'white',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value}億円 (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    // 2026/3期会社計画 vs 2025/3期実績の棒グラフ
    const forecastCtx = document.getElementById('forecastChart').getContext('2d');
    const forecastChart = new Chart(forecastCtx, {
        type: 'bar',
        data: {
            labels: ['売上高（億円）', '営業利益（億円）', '親会社帰属純利益（億円）'],
            datasets: [
                {
                    label: '2025/3期 実績',
                    data: [6782, 247.8, 151.3],
                    backgroundColor: '#4c8dda',
                    borderColor: '#0068b7',
                    borderWidth: 1
                }, 
                {
                    label: '2026/3期 会社計画',
                    data: [7000, 260.0, 155.0],
                    backgroundColor: '#00a0e9',
                    borderColor: '#004d86',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        // 売上高の表示を調整
                        callback: function(value) {
                            if (value >= 1000) {
                                return value / 1000 + 'k';
                            }
                            return value;
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            return `${label}: ${value}億円`;
                        }
                    }
                }
            }
        }
    });

    // テーブル行のホバーエフェクトを強化
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                row.style.backgroundColor = 'rgba(0, 104, 183, 0.05)';
                row.style.transition = 'background-color 0.3s ease';
            });
            row.addEventListener('mouseleave', () => {
                row.style.backgroundColor = '';
            });
        });
    });
    
    // スクロール時のヘッダー固定効果（オプション）
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.transition = 'padding 0.3s ease';
        } else {
            header.style.padding = '30px 0';
        }
    });
});
