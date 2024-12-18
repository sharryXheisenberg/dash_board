import { api } from './config';
import { API_ENDPOINTS } from './endpoints';

export interface StatsResponse {
  totalSales: string;
  activeUsers: string;
  newOrders: string;
  totalRevenue: string;
}

export const fetchStats = async (): Promise<StatsResponse> => {
  try {
    // For development/testing, using mock data
    // In production, uncomment the API call below
    // const response = await api.get(API_ENDPOINTS.STATS);
    // return response.data;
    
    // Mock data for development
    return {
      totalSales: `$${Math.floor(Math.random() * 100000)}`,
      activeUsers: (2000 + Math.floor(Math.random() * 1000)).toString(),
      newOrders: (300 + Math.floor(Math.random() * 100)).toString(),
      totalRevenue: `$${Math.floor(Math.random() * 150000)}`,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw new Error('Failed to fetch stats');
  }
};