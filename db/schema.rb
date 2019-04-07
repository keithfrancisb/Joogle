# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_07_163637) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_categories_on_name"
  end

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "size"
    t.text "desc"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_companies_on_name"
  end

  create_table "company_informations", force: :cascade do |t|
    t.integer "company_id"
    t.string "infoable_type"
    t.bigint "infoable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["infoable_type", "infoable_id"], name: "index_company_informations_on_infoable_type_and_infoable_id"
  end

  create_table "industries", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_industries_on_name"
  end

  create_table "job_informations", force: :cascade do |t|
    t.integer "job_id"
    t.string "infoable_type"
    t.bigint "infoable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["infoable_type", "infoable_id"], name: "index_job_informations_on_infoable_type_and_infoable_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title", null: false
    t.string "desc"
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_jobs_on_title"
  end

  create_table "levels", force: :cascade do |t|
    t.string "level", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_locations_on_name"
  end

end
