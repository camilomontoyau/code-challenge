'use strict';
const assert = require('chai').assert;
const should = require('chai').should();
const { getAllGists, getOneGist } = require('../github.service');

describe('github service', ()=>{
  describe('getAllGists', ()=>{
    it('should return an array of gists', function getAllGistsTest(done) {
      this.timeout(10000);
      getAllGists()
        .then(gists=>{
          should.exist(gists);
          assert.isArray(gists);
          assert.isAtLeast(gists.length, 1);
          assert.property(gists[0], 'url');
          assert.property(gists[0], 'forks_url');
          assert.property(gists[0], 'commits_url');
          assert.property(gists[0], 'id');
          assert.property(gists[0], 'git_pull_url');
          assert.property(gists[0], 'git_push_url');
          assert.property(gists[0], 'html_url');
          assert.property(gists[0], 'files');
          assert.property(gists[0], 'public');
          assert.property(gists[0], 'created_at');
          assert.property(gists[0], 'updated_at');
          assert.property(gists[0], 'description');
          assert.property(gists[0], 'comments');
          assert.property(gists[0], 'user');
          assert.property(gists[0], 'comments_url');
          assert.property(gists[0], 'truncated');
          done();
        })
        .catch(err=>{
          should.not.exist(err);
          done();
        });
    });
  });
  
  describe('getOneGist', ()=>{
    it('should return an array of gists', function getAllGistsTest(done) {
      this.timeout(10000);
      getOneGist('fd7e0d1a2d3dc2b336dd889165ec29ed')
        .then(gist=>{
          should.exist(gist);
          assert.isObject(gist);
          assert.property(gist, 'url');
          assert.property(gist, 'forks_url');
          assert.property(gist, 'commits_url');
          assert.property(gist, 'id');
          assert.property(gist, 'git_pull_url');
          assert.property(gist, 'git_push_url');
          assert.property(gist, 'html_url');
          assert.property(gist, 'files');
          assert.property(gist, 'public');
          assert.property(gist, 'created_at');
          assert.property(gist, 'updated_at');
          assert.property(gist, 'description');
          assert.property(gist, 'comments');
          assert.property(gist, 'user');
          assert.property(gist, 'comments_url');
          assert.property(gist, 'owner');
          assert.property(gist, 'fork_of');
          assert.property(gist, 'forks');
          assert.property(gist, 'history');
          assert.property(gist, 'truncated');
          done();
        })
        .catch(err=>{
          should.not.exist(err);
          done();
        });
    });
  });
});


