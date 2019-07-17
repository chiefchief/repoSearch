export const REPOSITORIES = function(data = {}) {
  this.total_count = data.total_count || 1;
  this.items = data.items || [];
};
