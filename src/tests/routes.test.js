const RepositoryController = require("../controllers/RepositoryController")

describe("Check methods of RepositoryController' ", () => {
  const repo = RepositoryController;
  it('shoud retrive defined all repositories mathods', () => {
    expect(repo.fetchRepository).toBeDefined();
    expect(repo.deleteRepository).toBeDefined();
    expect(repo.getAllRepository).toBeDefined();
    expect(repo.getRepositoryById).toBeDefined();
    expect(repo.postRepository).toBeDefined();
  });
});
