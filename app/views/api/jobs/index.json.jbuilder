json.jobs do
  @jobs.each do |job|
    json.set! job.id do
      json.partial! '/api/jobs/job.json.jbuilder', job: job
    end
  end
end