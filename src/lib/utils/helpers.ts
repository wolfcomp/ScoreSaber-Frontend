import type { Difficulty, LeaderboardInfo } from '$lib/models/LeaderboardData';
import type { RankingDifficulty } from '$lib/models/Ranking';
import { CDN_URL } from './env';
export function rankToPage(rank: number, perPage: number) {
   return Math.floor((rank + perPage - 1) / perPage);
}
export function getCDNUrl(input: string) {
   return CDN_URL + input;
}

export function getDifficultyStyle(input: Difficulty | RankingDifficulty): string {
   switch (input.difficulty) {
      case 1:
         return 'easy';
      case 3:
         return 'normal';
      case 5:
         return 'hard';
      case 7:
         return 'expert';
      case 9:
         return 'expert-plus';
   }
}

export function getDifficultyLabel(input: Difficulty | RankingDifficulty): string {
   switch (input.difficulty) {
      case 1:
         return 'Easy';
      case 3:
         return 'Normal';
      case 5:
         return 'Hard';
      case 7:
         return 'Expert';
      case 9:
         return 'Expert+';
   }
}

export function getDifficultyLabelSmall(input: Difficulty | RankingDifficulty): string {
   switch (input.difficulty) {
      case 1:
         return 'E';
      case 3:
         return 'N';
      case 5:
         return 'H';
      case 7:
         return 'X';
      case 9:
         return 'Ex+';
   }
}

export function getRankingApprovalStatus(input: number): string {
   switch (input) {
      case 0:
         return 'In Progress';
      case 1:
         return 'Approved';
      case 2:
         return 'Denied';
      case 3:
         return 'Qualified';
      default:
         return 'Unknown';
   }
}

export function getDifficultyOrStarValue(input: LeaderboardInfo): string {
   if (input.stars > 0) {
      return `${input.stars}★`;
   }
   return getDifficultyLabelSmall(input.difficulty);
}

export function groupBy(xs: any[], key: string) {
   return xs.reduce((rv: { [x: string]: any[] }, x: { [x: string]: string | number }) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
   }, {});
}

export const HMDs = {
   0: 'Unknown',
   1: 'Oculus Rift CV1',
   2: 'Vive',
   4: 'Vive Pro',
   8: 'Windows Mixed Reality',
   16: 'Rift S',
   32: 'Oculus Quest',
   64: 'Valve Index',
   128: 'Vive Cosmos'
};
