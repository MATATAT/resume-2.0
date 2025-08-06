import { Rank, type CategoricalValue, type RankedCategoricalValue } from '~/dto/resume';

export function isRankedCategoricalValue(value: any): value is RankedCategoricalValue {
    return (
        typeof value === 'object' &&
        value !== null &&
        'category' in value &&
        'values' in value &&
        'rank' in value &&
        Array.isArray(value.values) &&
        typeof value.category === 'string' &&
        Object.values(Rank).includes(value.rank)
    );
}

export function isCategoricalValue(value: any): value is CategoricalValue {
    return (
        typeof value === 'object' &&
        value !== null &&
        'category' in value &&
        'values' in value &&
        Array.isArray(value.values) &&
        typeof value.category === 'string'
    );
}
