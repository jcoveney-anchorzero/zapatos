"use strict";
/*
Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2022 George MacKerron
Released under the MIT licence: see LICENCE file
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = exports.now = exports.before = exports.after = exports.fromNow = exports.not = exports.and = exports.or = exports.isNotIn = exports.isIn = exports.notReImatch = exports.notReMatch = exports.reImatch = exports.reMatch = exports.notSimilarTo = exports.similarTo = exports.notIlike = exports.ilike = exports.notLike = exports.like = exports.notBetweenSymmetric = exports.notBetween = exports.betweenSymmetric = exports.between = exports.lte = exports.lt = exports.gte = exports.gt = exports.ne = exports.eq = exports.isNotDistinctFrom = exports.isDistinctFrom = exports.isNotUnknown = exports.isUnknown = exports.isNotFalse = exports.isFalse = exports.isNotTrue = exports.isTrue = exports.isNotNull = exports.isNull = void 0;
const core_1 = require("./core");
const utils_1 = require("./utils");
const conditionalParam = (a) => a instanceof core_1.SQLFragment || a instanceof core_1.ParentColumn || a instanceof core_1.Parameter ? a : (0, core_1.param)(a);
exports.isNull = (0, core_1.sql) `${core_1.self} IS NULL`;
exports.isNotNull = (0, core_1.sql) `${core_1.self} IS NOT NULL`;
exports.isTrue = (0, core_1.sql) `${core_1.self} IS TRUE`;
exports.isNotTrue = (0, core_1.sql) `${core_1.self} IS NOT TRUE`;
exports.isFalse = (0, core_1.sql) `${core_1.self} IS FALSE`;
exports.isNotFalse = (0, core_1.sql) `${core_1.self} IS NOT FALSE`;
exports.isUnknown = (0, core_1.sql) `${core_1.self} IS UNKNOWN`;
exports.isNotUnknown = (0, core_1.sql) `${core_1.self} IS NOT UNKNOWN`;
const isDistinctFrom = (a) => (0, core_1.sql) `${core_1.self} IS DISTINCT FROM ${conditionalParam(a)}`;
exports.isDistinctFrom = isDistinctFrom;
const isNotDistinctFrom = (a) => (0, core_1.sql) `${core_1.self} IS NOT DISTINCT FROM ${conditionalParam(a)}`;
exports.isNotDistinctFrom = isNotDistinctFrom;
const eq = (a) => (0, core_1.sql) `${core_1.self} = ${conditionalParam(a)}`;
exports.eq = eq;
const ne = (a) => (0, core_1.sql) `${core_1.self} <> ${conditionalParam(a)}`;
exports.ne = ne;
const gt = (a) => (0, core_1.sql) `${core_1.self} > ${conditionalParam(a)}`;
exports.gt = gt;
const gte = (a) => (0, core_1.sql) `${core_1.self} >= ${conditionalParam(a)}`;
exports.gte = gte;
const lt = (a) => (0, core_1.sql) `${core_1.self} < ${conditionalParam(a)}`;
exports.lt = lt;
const lte = (a) => (0, core_1.sql) `${core_1.self} <= ${conditionalParam(a)}`;
exports.lte = lte;
const between = (a, b) => (0, core_1.sql) `${core_1.self} BETWEEN (${conditionalParam(a)}) AND (${conditionalParam(b)})`;
exports.between = between;
const betweenSymmetric = (a, b) => (0, core_1.sql) `${core_1.self} BETWEEN SYMMETRIC (${conditionalParam(a)}) AND (${conditionalParam(b)})`;
exports.betweenSymmetric = betweenSymmetric;
const notBetween = (a, b) => (0, core_1.sql) `${core_1.self} NOT BETWEEN (${conditionalParam(a)}) AND (${conditionalParam(b)})`;
exports.notBetween = notBetween;
const notBetweenSymmetric = (a, b) => (0, core_1.sql) `${core_1.self} NOT BETWEEN SYMMETRIC (${conditionalParam(a)}) AND (${conditionalParam(b)})`;
exports.notBetweenSymmetric = notBetweenSymmetric;
const like = (a) => (0, core_1.sql) `${core_1.self} LIKE ${conditionalParam(a)}`;
exports.like = like;
const notLike = (a) => (0, core_1.sql) `${core_1.self} NOT LIKE ${conditionalParam(a)}`;
exports.notLike = notLike;
const ilike = (a) => (0, core_1.sql) `${core_1.self} ILIKE ${conditionalParam(a)}`;
exports.ilike = ilike;
const notIlike = (a) => (0, core_1.sql) `${core_1.self} NOT ILIKE ${conditionalParam(a)}`;
exports.notIlike = notIlike;
const similarTo = (a) => (0, core_1.sql) `${core_1.self} SIMILAR TO ${conditionalParam(a)}`;
exports.similarTo = similarTo;
const notSimilarTo = (a) => (0, core_1.sql) `${core_1.self} NOT SIMILAR TO ${conditionalParam(a)}`;
exports.notSimilarTo = notSimilarTo;
const reMatch = (a) => (0, core_1.sql) `${core_1.self} ~ ${conditionalParam(a)}`;
exports.reMatch = reMatch;
const reImatch = (a) => (0, core_1.sql) `${core_1.self} ~* ${conditionalParam(a)}`;
exports.reImatch = reImatch;
const notReMatch = (a) => (0, core_1.sql) `${core_1.self} !~ ${conditionalParam(a)}`;
exports.notReMatch = notReMatch;
const notReImatch = (a) => (0, core_1.sql) `${core_1.self} !~* ${conditionalParam(a)}`;
exports.notReImatch = notReImatch;
const isIn = (a) => a.length > 0 ? (0, core_1.sql) `${core_1.self} IN (${(0, core_1.vals)(a)})` : (0, core_1.sql) `false`;
exports.isIn = isIn;
const isNotIn = (a) => a.length > 0 ? (0, core_1.sql) `${core_1.self} NOT IN (${(0, core_1.vals)(a)})` : (0, core_1.sql) `true`;
exports.isNotIn = isNotIn;
const or = (...conditions) => (0, core_1.sql) `(${(0, utils_1.mapWithSeparator)(conditions, (0, core_1.sql) ` OR `, c => c)})`;
exports.or = or;
const and = (...conditions) => (0, core_1.sql) `(${(0, utils_1.mapWithSeparator)(conditions, (0, core_1.sql) ` AND `, c => c)})`;
exports.and = and;
const not = (condition) => (0, core_1.sql) `(NOT ${condition})`;
exports.not = not;
const fromNow = (n, unit = 'millisecond') => (0, core_1.sql) `now() + ${(0, core_1.param)(String(n) + ' ' + unit)}`;
exports.fromNow = fromNow;
exports.after = exports.gt;
exports.before = exports.lt;
exports.now = (0, core_1.sql) `now()`;
// these are really more operations than conditions, but we sneak them in here for now, for use e.g. in UPDATE queries
const add = (a) => (0, core_1.sql) `${core_1.self} + ${conditionalParam(a)}`;
exports.add = add;
const subtract = (a) => (0, core_1.sql) `${core_1.self} - ${conditionalParam(a)}`;
exports.subtract = subtract;