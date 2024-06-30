<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('submissions', function (Blueprint $table) {
            $table->string('state')->nullable();  // 新增 state 欄位，允許空值
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('submissions', function (Blueprint $table) {
            $table->dropColumn('state');  // 回滾遷移時移除 state 欄位
        });
    }
};
