<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(){
        Schema::table('submissions', function (Blueprint $table) {
            $table->string('money')->nullable();  // 添加可選的nullable()方法，以便允許空值
        });
    }

    public function down(){
        Schema::table('submissions', function (Blueprint $table) {
            $table->dropColumn('money');  // 確保回滾時可以移除該欄位
        });
    }

};

