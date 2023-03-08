const { Octokit } = require("@octokit/core");
const { paginateRest } = require("@octokit/plugin-paginate-rest");

const core = require('@actions/core');
const github = require('@actions/github');

const { parse } = require('json2csv');
