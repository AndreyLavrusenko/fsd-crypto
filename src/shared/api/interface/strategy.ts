export interface StrategySlide {
    strategy: string;
    risk: string;
    participants_count: number;
    profitability_per_year: number;
    background: string;
}

export interface StrategyCard {
    title: string;
    percentChange: number;
    icon: string;
    coinCount: number;
    color: string;
}